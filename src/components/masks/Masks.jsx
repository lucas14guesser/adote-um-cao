import Mask from 'react-input-mask'

export const Nome = ({ value, onChange }) => {
    return (
        <Mask
            type='text'
            required='required'
            name='nome'
            placeholder='Nome'
            mask="**************************************************"
            maskChar=""
            formatChars={{
                '*': '[A-Za-zÁáÉéÍíÓóÚúÃãÕõÂãÊêÎîÔôÛû ]',
            }}
            value={value}
            onChange={onChange}
            className='input-adotar'
        />
    )
}

export const Sobrenome = ({ value, onChange }) => {
    return (
        <Mask
            type='text'
            required='required'
            name='sobrenome'
            placeholder='Sobrenome'
            mask="**************************************************"
            maskChar=""
            formatChars={{
                '*': '[A-Za-zÁáÉéÍíÓóÚúÃãÕõÂãÊêÎîÔôÛû ]',
            }}
            value={value}
            onChange={onChange}
            className='input-adotar'
        />
    )
}

export const Email = ({ value, onChange }) => {
    return (
        <Mask
            type='text'
            required='required'
            name='email'
            placeholder='E-mail'
            value={value}
            onChange={onChange}
            className='input-adotar'
        />
    )

}

export const Celular = ({ value, onChange }) => {
    return (
        <Mask
            type='text'
            required='required'
            name='celular'
            placeholder='Celular'
            mask="(99) 99999-9999"
            value={value}
            onChange={onChange}
            className='input-adotar'
        />
    );
};

export const Descricao = ({ value, onChange }) => {
    return (
        <Mask
            type='text'
            required='required'
            name='descricao'
            placeholder='Descrição'
            value={value}
            onChange={onChange}
            className='input-adotar'
        />
    );
};