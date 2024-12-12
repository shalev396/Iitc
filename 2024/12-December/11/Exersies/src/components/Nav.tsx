import { link } from "../types/link";

export default function Nav({ links }: { links: React.ReactNode }) {
  return (
    <ul className="flex flex-row gap-2 px-4 py-3 shadow-sm hover:shadow-xl bg-slate-700 text-white">
      {links.map((link) => {
        return (
          <li>
            <a href={link.to}>{link.label}</a>
          </li>
        );
      })}
    </ul>
  );
}
//123

//$2b$10$8l//W9g5ecjxJm7qSad7uuwoSxg2jSh4OyazXswOBmwTcM6D66kC6
//$2b$10$OQc8D1YC1gvIjMBeDYaM9.2t0LMAg.moXaB0UBZKqrMUbsi050kXq
//$2b$10$g8acvNKPeFqTeNrOmjcvNOJ2Fc5MbrguazeU3J74ILor./z1mwlWq
