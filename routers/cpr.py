from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
import crud
from database import get_async_db  # Use async DB dependency
from schemas import cprs as schemas

router = APIRouter(prefix="/cpr", tags=["CPR"])

@router.post("/", response_model=schemas.CPREntryResponse)
async def create_cpr(entry: schemas.CPREntryCreate, db: AsyncSession = Depends(get_async_db)):
    return await crud.create_cpr_entry(db, entry)

@router.get("/", response_model=list[schemas.CPREntryResponse])
async def read_cpr(skip: int = 0, limit: int = 10, db: AsyncSession = Depends(get_async_db)):
    return await crud.get_cpr_entries(db, skip, limit)

@router.get("/{entry_id}", response_model=schemas.CPREntryResponse)
async def read_cpr_entry(entry_id: str, db: AsyncSession = Depends(get_async_db)):
    db_entry = await crud.get_cpr_entry(db, entry_id)
    if db_entry is None:
        raise HTTPException(status_code=404, detail="Entry not found")
    return db_entry

@router.put("/{entry_id}", response_model=schemas.CPREntryResponse)
async def update_cpr(entry_id: str, updates: schemas.CPREntryCreate, db: AsyncSession = Depends(get_async_db)):
    return await crud.update_cpr_entry(db, entry_id, updates)

@router.delete("/{entry_id}")
async def delete_cpr(entry_id: str, db: AsyncSession = Depends(get_async_db)):
    return await crud.delete_cpr_entry(db, entry_id)
