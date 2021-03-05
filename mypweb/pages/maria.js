import Link from 'next/link'
import MariaPrea from '../components/mariaprea'

export default function maria(){
    
    return (
        <div>
            <h2>Página Maria Preá</h2>
            
           <MariaPrea adjetivo={"nojenta"} / >
            
            
           <Link href="/">
            <a>Voltar Index</a>
            </Link>

                       
        </div>
        


    )

}
