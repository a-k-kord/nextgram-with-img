import Image from 'next/image';
import Link from 'next/link';
import LogHydrationComplete from './utils/LogHydrationComplete';

export default function Page() {
    let photos = Array.from({ length: 6 }, (_, i) => i + 1);

    return (
        <section className="cards-container">
            {photos.map((id) => (
                <Link className="card" key={id} href={`/photos/${id}`} passHref>
                    <Image
                        width={200}
                        height={200}
                        src={`https://picsum.photos/id/${id}/200/300`}
                        alt="alt"
                        className="rounded-lg shadow-lg"
                        priority
                    />
                </Link>
            ))}
            <LogHydrationComplete />
        </section>
    );
}
