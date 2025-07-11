from fastapi import FastAPI
from contextlib import asynccontextmanager
from database import Base, engine
from routers import student as student_router
from routers import auth as auth_router
from routers import cpr as cpr_router 

from fastapi.openapi.utils import get_openapi

@asynccontextmanager
async def lifespan(app: FastAPI):
    # ✅ This runs at startup
    Base.metadata.create_all(bind=engine)
    yield
    # ✅ This runs at shutdown (optional cleanup)

app = FastAPI(lifespan=lifespan)

app.include_router(student_router.router)
app.include_router(auth_router.router)
app.include_router(cpr_router.router)


@app.get("/")
def root():
    return {"message": "CPR System Backend is Running!"}


def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema

    openapi_schema = get_openapi(
        title="CPR System API",
        version="1.0.0",
        description="API for Continuous Progress Report System",
        routes=app.routes,
    )

    openapi_schema["components"]["securitySchemes"] = {
        "BearerAuth": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT",
        }
    }

    for path in openapi_schema["paths"].values():
        for method in path.values():
            method["security"] = [{"BearerAuth": []}]

    app.openapi_schema = openapi_schema
    return app.openapi_schema

app.openapi = custom_openapi