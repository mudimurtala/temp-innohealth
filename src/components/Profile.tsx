interface ProfileProps {
  name: string
  age?: number
}

function Profile({ name, age = 18 }: ProfileProps) {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="font-bold text-lg">{name}</h2>
      <p>Age: {age}</p>
    </div>
  )
}

export default Profile
