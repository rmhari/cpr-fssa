import os
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base

Base = declarative_base()

# Your database URL from environment
DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError("DATABASE_URL is not set or is empty.")

# Convert to async URL by replacing postgresql:// with postgresql+asyncpg://
# ASYNC_DATABASE_URL = DATABASE_URL.replace("postgresql://", "postgresql+asyncpg://", 1)

# Async engine
async_engine = create_async_engine(DATABASE_URL, echo=True)

# ✅ Correct sessionmaker for async usage
AsyncSessionLocal = async_sessionmaker(
    bind=async_engine,
    expire_on_commit=False
)


async def get_async_db():
    async with AsyncSessionLocal() as session:
        yield session

# For synchronous operations (if needed)
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)