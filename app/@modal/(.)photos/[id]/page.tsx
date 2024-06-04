import { Modal } from './modal';
import Image from 'next/image';

export default function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string };
}) {
    return (
        <Modal>
            <Image
                width={400}
                height={400}
                src={`https://picsum.photos/id/${photoId}/800/800`}
                alt="alt"
                className="rounded-lg shadow-lg"
                priority
            />
        </Modal>
    );
}
