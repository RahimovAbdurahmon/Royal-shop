import { ShoppingCartOutlined } from '@mui/icons-material'
import { Button } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Cart = () => {
    // translate
    const { t } = useTranslation();
  return (
    <>
    <main className='main'>
        <div className='max-w-[1200px] mx-auto flex flex-col gap-[50px] justify-center w-[100%] items-center text-center'>
            <ShoppingCartOutlined sx={{fontSize: "300px"}} />
            <h1 className='text-[20px] lg:text-[50px] xl:text-[80px] font-[600]'>{t("cart.title")}</h1>
            <Link to={"/"}><Button variant='contained' size='large'>Back Home</Button></Link> <br />
        </div>
    </main>
    </>
  )
}

export default Cart