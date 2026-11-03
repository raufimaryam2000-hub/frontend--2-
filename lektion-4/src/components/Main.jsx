const courses = ["HTML & CSS", "JavaScript", "React"];

function Main() {
  return (
    <main>
      <h2>Kurser</h2>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </main>
  );
}
export default Main;  