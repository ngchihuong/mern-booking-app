import { maxPrice } from "@/config/hotel-options-config";

type Props = {
    selectedPrice?: number;
    onChange: (value?: number) => void;
}
export default function PriceFilter({ selectedPrice, onChange }: Props) {
    return (
        <div>
            <h4 className="text-md font-semibold mb-2">Max Price</h4>
            <select value={selectedPrice}
                onChange={(event) => onChange(event.target.value ? parseInt(event.target.value) : undefined)}
                className="p-2 border rounded-md w-full"
            >
                <option value="">Select Max Price</option>
                {maxPrice.map((price) => (
                    <option value={price}>{price}</option>
                ))}
            </select>
        </div>
    )
}