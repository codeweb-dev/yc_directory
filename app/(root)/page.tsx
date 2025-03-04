import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">pitch your startup, connect with entrepreneurs</h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition.
        </p>

        <SearchForm query={query} />

      </section>
      <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Search result for "${query}"` : 'All Startups'}
          </p>
        </section>
    </>
  );
}
