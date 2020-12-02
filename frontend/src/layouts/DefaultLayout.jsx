import HeaderCustom from '../components/HeaderCustom'

export default function DefaultLayout (props) {
    return (
        <div>
            <HeaderCustom >
                {props.children}    
            </HeaderCustom>
        </div>
    )
}