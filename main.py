from fastapi import FastAPI
from database import Base, engine
from routers import cpr

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(cpr.router)

@app.get("/")
def root():
    return {"message": "CPR System Backend is Running!"}
