export default function Item({ name, quantity, category }) {
    return (
        <li className="flex flex-col space-y-1 w-1/5 p-1 bg-gray-800 text-white mb-3 ml-3 shadow-lg">
            <span className="text-medium font-semibold">{name}</span>
            <span className="text-xs">
                Buy {quantity} in {category}
            </span>
        </li>
    );
}
