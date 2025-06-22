from sqlalchemy.orm import Session
import models
from schemas import cprs as schemas
from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession
from models import User
from datetime import datetime

async def create_cpr_entry(db: AsyncSession, entry: schemas.CPREntryCreate):
    db_entry = models.CPREntry(**entry.dict())
    db.add(db_entry)
    await db.commit()
    await db.refresh(db_entry)
    return db_entry

async def get_cpr_entries(db: AsyncSession, skip: int = 0, limit: int = 10):
    result = await db.execute(select(models.CPREntry).offset(skip).limit(limit))
    return result.scalars().all()

async def get_cpr_entry(db: AsyncSession, entry_id):
    result = await db.execute(select(models.CPREntry).where(models.CPREntry.id == entry_id))
    return result.scalars().first()

async def update_cpr_entry(db: AsyncSession, entry_id, updates: schemas.CPREntryCreate):
    db_entry = await get_cpr_entry(db, entry_id)
    if db_entry:
        for key, value in updates.dict().items():
            setattr(db_entry, key, value)
        await db.commit()
        await db.refresh(db_entry)
    return db_entry

async def delete_cpr_entry(db: AsyncSession, entry_id):
    db_entry = await get_cpr_entry(db, entry_id)
    if db_entry:
        await db.delete(db_entry)
        await db.commit()
    return db_entry

async def get_user_by_username(db: AsyncSession, username: str):
    result = await db.execute(select(User).where(User.username == username))
    return result.scalars().first()


    

    
