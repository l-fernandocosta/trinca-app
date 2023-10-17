import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface CustomAvatarProps {
  src?: string; 
  alt?: string; 
  fallback?: string; 
}

export const CustomAvatar = ({alt, fallback, src} : CustomAvatarProps) => {
  return (
    <Avatar>
    <AvatarImage src={src} alt={alt} />
    <AvatarFallback>{fallback}</AvatarFallback>
  </Avatar>
  )
}
