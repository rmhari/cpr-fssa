from sqlalchemy.orm import Session
from uuid import UUID
import models, schemas
from schemas import cpr as schemas
from typing import Optional
from datetime import datetime

def get_all_cprs(db: Session):
    return db.query(models.CPREntry).all()

def get_cpr_by_id(db: Session, cpr_id: UUID):
    return db.query(models.CPREntry).filter(models.CPREntry.id == cpr_id).first()

def create_cpr(db: Session, cpr: schemas.CPREntryCreate):
    db_cpr = models.CPREntry(**cpr.dict())
    db.add(db_cpr)
    db.commit()
    db.refresh(db_cpr)
    return db_cpr

def update_cpr(db: Session, cpr_id: UUID, cpr: schemas.CPREntryUpdate):
    db_cpr = get_cpr_by_id(db, cpr_id)
    if db_cpr:
        for key, value in cpr.dict(exclude_unset=True).items():
            setattr(db_cpr, key, value)
        db.commit()
        db.refresh(db_cpr)
    return db_cpr

def delete_cpr(db: Session, cpr_id: UUID):
    db_cpr = get_cpr_by_id(db, cpr_id)
    if db_cpr:
        db.delete(db_cpr)
        db.commit()
    return db_cpr


def get_filtered_cprs(
    db: Session,
    student_id: Optional[UUID] = None,
    staff_name: Optional[str] = None,
    color_code: Optional[str] = None,
    start_date: Optional[datetime] = None,
    end_date: Optional[datetime] = None
):
    query = db.query(models.CPREntry)

    if student_id:
        query = query.filter(models.CPREntry.student_id == student_id)
    if staff_name:
        query = query.filter(models.CPREntry.staff_name.ilike(f"%{staff_name}%"))
    if color_code:
        query = query.filter(models.CPREntry.color_code == color_code)
    if start_date:
        query = query.filter(models.CPREntry.created_at >= start_date)
    if end_date:
        query = query.filter(models.CPREntry.created_at <= end_date)

    return query.all()
