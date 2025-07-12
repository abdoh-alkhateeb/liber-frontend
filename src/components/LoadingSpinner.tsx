export default function LoadingSpinner() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="size-25 animate-spin rounded-full border-10 border-blue-500 border-t-transparent"></div>
    </div>
  );
}
