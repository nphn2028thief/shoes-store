function Loading() {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
      <div
        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-black/70 rounded-full"
        role="status"
        aria-label="loading"
      />
    </div>
  );
}

export default Loading;
