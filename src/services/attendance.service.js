export const getStatus = ({entry, exit}) => {
    if(entry && exit) return 'presente';
    if(entry || exit) return 'media falta';
    return 'ausente';
}