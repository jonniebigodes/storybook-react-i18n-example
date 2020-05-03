import React from 'react'
import { useTranslation } from 'react-i18next';

const TranslatedDog=()=>{
    const { t } = useTranslation();
    return(
        <div>
            <p>{t('dog','woof')}</p>
        </div>
    )
}

export default TranslatedDog