import Meta from "../../components/Meta";

export default function Community() {
  return (
    <>
      <Meta title="Community" />
      <div className="max-w-screen-lg bg-white rounded p-6 md:p-12 mx-auto space-y-6">
        <h1 className="text-gray-700 font-bold text-2xl md:text-3xl tracking-normal leading-normal md:leading-relaxed">
          Fetching dynamically structured data in a CMS with GraphQL
        </h1>
        <p className="text-sm md:text-base text-gray-400 tracking-normal leading-relaxed">
          January 12, 2022 7 min read
        </p>
        <p className="text-gray-700 text-base md:text-lg tracking-normal leading-relaxed">
          This situation is most evident when using GraphQL with a CMS because
          CMSs are naturally opinionated and GraphQL might override their
          behavior. If we aren’t depending on a CMS and are instead building a
          site from scratch, then we should have full control of the site’s
          architecture and we may be willing to adapt it for GraphQL — and this
          conflict will not happen.
        </p>
        <p className="text-gray-700 text-base md:text-lg tracking-normal leading-relaxed">
          In this article, we will explore the way in which GraphQL imposes its
          own preconditions during data fetching, why it happens, and what
          options we have to work around it. We’ll be using WordPress as our
          example CMS.
        </p>
        <p className="text-gray-700 text-base md:text-lg tracking-normal leading-relaxed">
          This presents a problem: when a site admin adds an extra level to the
          menu via the user interface, this new level will not appear in the
          site if it is not also reflected in the GraphQL query. A developer
          must be engaged to modify the code — add the extra level to the
          GraphQL query, regenerate the theme’s .zip file, and reinstall it on
          the site. Only then will the new level show up in the query.
        </p>
        <p className="text-gray-700 text-base md:text-lg tracking-normal leading-relaxed">
          Indeed, WordPress is used not just by developers but also by
          non-developers, people who may not appreciate that their site’s theme
          would need to be updated in order to update a menu. This runs
          counterintuitive and contrary to the idea of a CMS, so GraphQL would
          be imposing its own way of working on its host WordPress.
        </p>
        <p className="text-gray-700 text-base md:text-lg tracking-normal leading-relaxed">
          A better solution would be to tell GraphQL to keep iterating down the
          sublevels until there are no more of them, i.e., until the field
          children is null. When working with PHP, for instance, a function can
          call itself recursively, until the input is the basic element:
        </p>
        <p className="text-gray-700 text-base md:text-lg tracking-normal leading-relaxed">
          Another solution would be to create a custom directive, @recursive,
          which recursively applies a fragment to a field’s connections and its
          sub-connections all the way down until reaching the leaf nodes in the
          graph:
        </p>
        <p className="text-gray-700 text-base md:text-lg tracking-normal leading-relaxed">
          This situation is most evident when using GraphQL with a CMS because
          CMSs are naturally opinionated and GraphQL might override their
          behavior. If we aren’t depending on a CMS and are instead building a
          site from scratch, then we should have full control of the site’s
          architecture and we may be willing to adapt it for GraphQL — and this
          conflict will not happen.
        </p>
        <p className="text-gray-700 text-base md:text-lg tracking-normal leading-relaxed">
          In this article, we will explore the way in which GraphQL imposes its
          own preconditions during data fetching, why it happens, and what
          options we have to work around it. We’ll be using WordPress as our
          example CMS.
        </p>
        <p className="text-gray-700 text-base md:text-lg tracking-normal leading-relaxed">
          This presents a problem: when a site admin adds an extra level to the
          menu via the user interface, this new level will not appear in the
          site if it is not also reflected in the GraphQL query. A developer
          must be engaged to modify the code — add the extra level to the
          GraphQL query, regenerate the theme’s .zip file, and reinstall it on
          the site. Only then will the new level show up in the query.
        </p>
        <p className="text-gray-700 text-base md:text-lg tracking-normal leading-relaxed">
          Another solution would be to create a custom directive, @recursive,
          which recursively applies a fragment to a field’s connections and its
          sub-connections all the way down until reaching the leaf nodes in the
          graph:
        </p>
      </div>
    </>
  );
}
