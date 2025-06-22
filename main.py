from fastapi import FastAPI
from database import Base, async_engine
from routers import auth, cpr
import asyncio

app = FastAPI()

# # Create tables on startup
# @app.on_event("startup")
# async def create_tables():
#     async with async_engine.begin() as conn:
#         await conn.run_sync(Base.metadata.create_all)

app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(cpr.router, prefix="/cpr", tags=["CPR"])

@app.get("/")
async def root():
    return {"message": "CPR System Backend is Running!"}

