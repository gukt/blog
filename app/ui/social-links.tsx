export default function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/gukaitong",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/gukaitong",
    },
    {
      name: "Email",
      url: "mailto:gukaitong@gmail.com",
    },
  ];

  return (
    <ul className="list-none p-0">
      {socialLinks.map((link) => (
        <li key={link.name} className="inline-block mr-4">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
