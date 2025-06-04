'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Image from 'next/image';
import { User } from './users';

interface Props {
  user: User;
}

export function UserCard({ user }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: user.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="relative w-full rounded-xl overflow-hidden shadow-md cursor-move group"
    >
      <Image
        src={user.image}
        alt={user.name}
        width={300}
        height={200}
        className="w-full h-60 object-cover"
      />

      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 backdrop-blur-md bg-white/30 group-hover:bg-white/50 transition-colors">
        <p className="font-semibold text-white drop-shadow">{user.name}</p>
        <p className="text-sm text-white drop-shadow">{user.email}</p>
      </div>
    </div>
  );
}
