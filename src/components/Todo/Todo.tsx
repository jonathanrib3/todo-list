export default function Todo({ title, description }: { title: string, description: string }) {
  return(
    <li>
      <h2>
        { title }
      </h2>

      <p>
        { description }
      </p>
    </li>
  )
}