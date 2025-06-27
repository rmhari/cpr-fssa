from fastapi import APIRouter, Depends, HTTPException, Form
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi.security import OAuth2PasswordRequestForm
from database import get_async_db
import auth, crud

router = APIRouter()

@router.post("/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_async_db)):
    user = await crud.get_user_by_username(db, form_data.username)
    if not user or not auth.verify_password(form_data.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid username or password")

    token = auth.create_access_token(data={"sub": user.username})
    return {"access_token": token, "token_type": "bearer"}

# @router.post("/reset-password")
# async def reset_password(username: str = Form(...), new_password: str = Form(...), db: AsyncSession = Depends(get_async_db)):
#     user = await crud.get_user_by_username(db, username)
#     if not user:
#         raise HTTPException(status_code=404, detail="User not found")

#     new_hashed = auth.get_password_hash(new_password)
#     await crud.update_user_password(db, user, new_hashed)
#     return {"message": "Password updated successfully"}

@router.post("/logout")
async def logout():
    return {"message": "Logout successful. Please discard token on client side."}
