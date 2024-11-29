export default function FieldError({errorText}: {errorText: string}) {
    return (
        <div className="text-error absolute italic text-xs">
            {errorText}
        </div>
    )
}