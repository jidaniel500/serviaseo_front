
import next from "next"

interface MenuProps {
    lista: any[]
}



export default function Menu({ lista }: MenuProps) {

    let productos: string[] = ['escobas', 'cepillos', 'shampoos']



    return (
        <section className="bg-gray-800 text-white rounded-lg p-4 shadow-lg">
            <ul className="flex space-x-4">
                <li>Opcion 1</li>
                <li>Opcion 2</li>
            </ul>
        </section>

    )

}