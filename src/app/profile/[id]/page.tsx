export default function UserProfile({ params }: any) {
  return (
    <div className="flex justify-center flex-col items-center">
      profile
      <p className="text-lg text-center font-bold">
        This is user{" "}
        <span className="p-2 bg-orange-500 text-white">{params.id}</span>
      </p>
    </div>
  );
}
