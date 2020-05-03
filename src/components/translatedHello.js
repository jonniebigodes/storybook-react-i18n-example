import React from 'react'
import { useTranslation } from 'react-i18next';

const TranslatedHello=()=>{
    const { t } = useTranslation();
    return(
        <div>
            <p>{t('welcome','ahoy hoy')}</p>
           
        </div>
    )
}

export default TranslatedHello