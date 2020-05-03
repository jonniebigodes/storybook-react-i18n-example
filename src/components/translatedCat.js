import React from 'react'
import { useTranslation } from 'react-i18next';

const TranslatedCat = () => {
    const { t } = useTranslation();
    return(
        <div>
            <p>{t('cat','meoww')}</p>
        </div>
    )
}

export default TranslatedCat