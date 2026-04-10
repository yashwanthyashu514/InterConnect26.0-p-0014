export default function useMentors() {
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("All");

  const mentors = useMemo(() => {
    return dummyMentors.filter((mentor) => {
      const matchesSearch = mentor.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesDomain =
        domain === "All" || mentor.domain.includes(domain);

      return matchesSearch && matchesDomain;
    });
  }, [search, domain]);

  return {
    mentors,
    search,
    setSearch,
    domain,
    setDomain,
  };
}