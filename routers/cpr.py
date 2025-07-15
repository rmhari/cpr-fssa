from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID
from typing import Optional, List
from fastapi import Query
from datetime import datetime

from database import SessionLocal
from crud import cpr as crud_cpr
import schemas

from .auth import get_current_user
import models

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

router = APIRouter(
    prefix="/cpr",
    tags=["CPR Entries"]
)

# ✅ Get all CPRs 
@router.get("/", response_model=list[schemas.CPREntryOut])
def get_all(db: Session = Depends(get_db), user: models.User = Depends(get_current_user)):
    return crud_cpr.get_all_cprs(db)

# ✅ Get CPR by ID
@router.get("/{cpr_id}", response_model=schemas.CPREntryOut)
def get_by_id(cpr_id: UUID, db: Session = Depends(get_db), user: models.User = Depends(get_current_user)):
    cpr = crud_cpr.get_cpr_by_id(db, cpr_id)
    if not cpr:
        raise HTTPException(status_code=404, detail="CPR entry not found")
    return cpr

# ✅ Create CPR
@router.post("/", response_model=schemas.CPREntryOut)
def create(cpr: schemas.CPREntryCreate, db: Session = Depends(get_db), user: models.User = Depends(get_current_user)):
    return crud_cpr.create_cpr(db, cpr)

# ✅ Update CPR
@router.put("/{cpr_id}", response_model=schemas.CPREntryOut)
def update(cpr_id: UUID, cpr: schemas.CPREntryUpdate, db: Session = Depends(get_db), user: models.User = Depends(get_current_user)):
    updated = crud_cpr.update_cpr(db, cpr_id, cpr)
    if not updated:
        raise HTTPException(status_code=404, detail="CPR entry not found")
    return updated

# ✅ Delete CPR
@router.delete("/{cpr_id}", response_model=schemas.CPREntryOut)
def delete(cpr_id: UUID, db: Session = Depends(get_db), user: models.User = Depends(get_current_user)):
    deleted = crud_cpr.delete_cpr(db, cpr_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="CPR entry not found")
    return deleted

# ✅ Get all CPRs with optional filters
@router.get("/", response_model=List[schemas.CPREntryOut])
def get_all_cprs(
    student_id: Optional[UUID] = Query(None),
    staff_name: Optional[str] = Query(None),
    color_code: Optional[str] = Query(None),
    start_date: Optional[datetime] = Query(None),
    end_date: Optional[datetime] = Query(None),
    db: Session = Depends(get_db),
    user: models.User = Depends(get_current_user)
):
    return crud_cpr.get_filtered_cprs(
        db=db,
        student_id=student_id,
        staff_name=staff_name,
        color_code=color_code,
        start_date=start_date,
        end_date=end_date
    )
