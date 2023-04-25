import tenis from '../../assets/boot.svg';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export function ProductCard() {
    return (
        <div className="w-56 bg-[#FFFFFF] flex flex-col items-left rounded-2xl p-8 relative shadow-md">
            <button className='absolute top-2 right-3'>
                <ShoppingCartIcon className='w-7' />
            </button    >
            <img className='w-40 h-20 ' src={tenis} alt="" />
            <div className="flex flex-col text-left mt-5">
                <span className="text-xl font-bold">Nike</span>
                <span className="mt-2 text-base text-[#7C7A7A] font-sm">Air Force 1 Jester XX Black Sonic Yellow ...</span>
                <span className="mt-2 text-xl font-bold">R$ 550</span>
            </div>
        </div>
    );
}