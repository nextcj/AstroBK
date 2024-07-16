declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"categories": {
"books.md": {
	id: "books.md";
  slug: "books";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".md"] };
"golang.md": {
	id: "golang.md";
  slug: "golang";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".md"] };
"kubernetes.md": {
	id: "kubernetes.md";
  slug: "kubernetes";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".md"] };
"laravel.md": {
	id: "laravel.md";
  slug: "laravel";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".md"] };
"life.md": {
	id: "life.md";
  slug: "life";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".md"] };
"mysql.md": {
	id: "mysql.md";
  slug: "mysql";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".md"] };
"nginx.md": {
	id: "nginx.md";
  slug: "nginx";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".md"] };
"php.md": {
	id: "php.md";
  slug: "php";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".md"] };
"tool.md": {
	id: "tool.md";
  slug: "tool";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".md"] };
};
"posts": {
"2020-year-end-review.md": {
	id: "2020-year-end-review.md";
  slug: "2020-year-end-review";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"About-godruoyi.md": {
	id: "About-godruoyi.md";
  slug: "about-godruoyi";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"TikTok.md": {
	id: "TikTok.md";
  slug: "tiktok";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"a-day-at-the-hospital.md": {
	id: "a-day-at-the-hospital.md";
  slug: "a-day-at-the-hospital";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"a-pack-of-cigarettes.md": {
	id: "a-pack-of-cigarettes.md";
  slug: "a-pack-of-cigarettes";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"a-pit-in-the-laravel-queue-priority.md": {
	id: "a-pit-in-the-laravel-queue-priority.md";
  slug: "a-pit-in-the-laravel-queue-priority";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"a-turtle.md": {
	id: "a-turtle.md";
  slug: "a-turtle";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"adjust-your-heart-and-write-something.md": {
	id: "adjust-your-heart-and-write-something.md";
  slug: "adjust-your-heart-and-write-something";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"america.md": {
	id: "america.md";
  slug: "america";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"another-way-to-do-it-is-to-swap-the-values-of-the-two-variables.md": {
	id: "another-way-to-do-it-is-to-swap-the-values-of-the-two-variables.md";
  slug: "another-way-to-do-it-is-to-swap-the-values-of-the-two-variables";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"axios-error-handling.md": {
	id: "axios-error-handling.md";
  slug: "axios-error-handling";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"banjiu.md": {
	id: "banjiu.md";
  slug: "banjiu";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"best-nginx-configuration-for-improved-security.md": {
	id: "best-nginx-configuration-for-improved-security.md";
  slug: "best-nginx-configuration-for-improved-security";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"blog-3.md": {
	id: "blog-3.md";
  slug: "blog-3";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"continue-refueling-in-2019.md": {
	id: "continue-refueling-in-2019.md";
  slug: "continue-refueling-in-2019";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"dads-tricycle.md": {
	id: "dads-tricycle.md";
  slug: "dads-tricycle";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"emei-out.md": {
	id: "emei-out.md";
  slug: "emei-out";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"former-soviet-jokes-kept-by-the-cia.md": {
	id: "former-soviet-jokes-kept-by-the-cia.md";
  slug: "former-soviet-jokes-kept-by-the-cia";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"get-started-with-mysql-cursor.md": {
	id: "get-started-with-mysql-cursor.md";
  slug: "get-started-with-mysql-cursor";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"go-lexical-analysis-and-syntax-analysis-2-parsing-of-import-declarations.md": {
	id: "go-lexical-analysis-and-syntax-analysis-2-parsing-of-import-declarations.md";
  slug: "go-lexical-analysis-and-syntax-analysis-2-parsing-of-import-declarations";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"golang-lexer-and-parser-1.md": {
	id: "golang-lexer-and-parser-1.md";
  slug: "golang-lexer-and-parser-1";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"golang-snowflake.md": {
	id: "golang-snowflake.md";
  slug: "golang-snowflake";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"golang-throttle.md": {
	id: "golang-throttle.md";
  slug: "golang-throttle";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"how-should-one-spend-one-s-life.md": {
	id: "how-should-one-spend-one-s-life.md";
  slug: "how-should-one-spend-one-s-life";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"how-the-container-works-and-the-isolation-mechanism.md": {
	id: "how-the-container-works-and-the-isolation-mechanism.md";
  slug: "how-the-container-works-and-the-isolation-mechanism";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"in-the-spring-of-1939-in-taiyuan.md": {
	id: "in-the-spring-of-1939-in-taiyuan.md";
  slug: "in-the-spring-of-1939-in-taiyuan";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"intervention-image-was-used-to-synthesize-images.md": {
	id: "intervention-image-was-used-to-synthesize-images.md";
  slug: "intervention-image-was-used-to-synthesize-images";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"jin-ping-mei.md": {
	id: "jin-ping-mei.md";
  slug: "jin-ping-mei";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"lambda-connect-rds.md": {
	id: "lambda-connect-rds.md";
  slug: "lambda-connect-rds";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"laravel-bus-dispatcher-and-event-dispatcher.md": {
	id: "laravel-bus-dispatcher-and-event-dispatcher.md";
  slug: "laravel-bus-dispatcher-and-event-dispatcher";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"laravel-octane.md": {
	id: "laravel-octane.md";
  slug: "laravel-octane";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"laravel-pipeline-flow-principle.md": {
	id: "laravel-pipeline-flow-principle.md";
  slug: "laravel-pipeline-flow-principle";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"laravel-response-macro-principle.md": {
	id: "laravel-response-macro-principle.md";
  slug: "laravel-response-macro-principle";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"let-s-encrypt-generic-domain-name-certificate-application-and-configuration.md": {
	id: "let-s-encrypt-generic-domain-name-certificate-application-and-configuration.md";
  slug: "let-s-encrypt-generic-domain-name-certificate-application-and-configuration";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"monks-on-mount-jiuhua.md": {
	id: "monks-on-mount-jiuhua.md";
  slug: "monks-on-mount-jiuhua";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"my-books.md": {
	id: "my-books.md";
  slug: "my-books";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"my-dear-abao-feeling.md": {
	id: "my-dear-abao-feeling.md";
  slug: "my-dear-abao-feeling";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"my-sublime-text-plug-in-configuration.md": {
	id: "my-sublime-text-plug-in-configuration.md";
  slug: "my-sublime-text-plug-in-configuration";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"my-technical-journey.md": {
	id: "my-technical-journey.md";
  slug: "my-technical-journey";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"nativephp.md": {
	id: "nativephp.md";
  slug: "nativephp";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"nginx-configuration-across-support.md": {
	id: "nginx-configuration-across-support.md";
  slug: "nginx-configuration-across-support";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"nginx-configures-secondary-directory-support.md": {
	id: "nginx-configures-secondary-directory-support.md";
  slug: "nginx-configures-secondary-directory-support";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"optimize-laravel-model-queries-using-preload.md": {
	id: "optimize-laravel-model-queries-using-preload.md";
  slug: "optimize-laravel-model-queries-using-preload";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"php-id-generator-based-on-snowflake-algorithm.md": {
	id: "php-id-generator-based-on-snowflake-algorithm.md";
  slug: "php-id-generator-based-on-snowflake-algorithm";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"procrastination.md": {
	id: "procrastination.md";
  slug: "procrastination";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"qiu-laohu.md": {
	id: "qiu-laohu.md";
  slug: "qiu-laohu";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"recommend-a-high-level-ssh-client-tool.md": {
	id: "recommend-a-high-level-ssh-client-tool.md";
  slug: "recommend-a-high-level-ssh-client-tool";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"review-2021.md": {
	id: "review-2021.md";
  slug: "review-2021";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"review-2023.md": {
	id: "review-2023.md";
  slug: "review-2023";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"review-of-2022.md": {
	id: "review-of-2022.md";
  slug: "review-of-2022";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"specify-chinese-support-for-your-faker-fake-data-generator.md": {
	id: "specify-chinese-support-for-your-faker-fake-data-generator.md";
  slug: "specify-chinese-support-for-your-faker-fake-data-generator";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"talk-about-the-official-account.md": {
	id: "talk-about-the-official-account.md";
  slug: "talk-about-the-official-account";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-50-rule-of-contradiction.md": {
	id: "the-50-rule-of-contradiction.md";
  slug: "the-50-rule-of-contradiction";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-about-gblog.md": {
	id: "the-about-gblog.md";
  slug: "the-about-gblog";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-changes-in-my-hometown.md": {
	id: "the-changes-in-my-hometown.md";
  slug: "the-changes-in-my-hometown";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-ghost.md": {
	id: "the-ghost.md";
  slug: "the-ghost";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-go-init-function.md": {
	id: "the-go-init-function.md";
  slug: "the-go-init-function";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-origin-of-xuanzang-in-the-tang-dynasty.md": {
	id: "the-origin-of-xuanzang-in-the-tang-dynasty.md";
  slug: "the-origin-of-xuanzang-in-the-tang-dynasty";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-relationship-between-fastcgi-and-php-fpm.md": {
	id: "the-relationship-between-fastcgi-and-php-fpm.md";
  slug: "the-relationship-between-fastcgi-and-php-fpm";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-resetful-api-design-specification.md": {
	id: "the-resetful-api-design-specification.md";
  slug: "the-resetful-api-design-specification";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-revolution-in-silicon-valley.md": {
	id: "the-revolution-in-silicon-valley.md";
  slug: "the-revolution-in-silicon-valley";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-spring-of-linbo.md": {
	id: "the-spring-of-linbo.md";
  slug: "the-spring-of-linbo";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-story-of-shao-ping-and-xiaoxia.md": {
	id: "the-story-of-shao-ping-and-xiaoxia.md";
  slug: "the-story-of-shao-ping-and-xiaoxia";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-third-anniversary-of-the-blog.md": {
	id: "the-third-anniversary-of-the-blog.md";
  slug: "the-third-anniversary-of-the-blog";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"three-body.md": {
	id: "three-body.md";
  slug: "three-body";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"tingdian.md": {
	id: "tingdian.md";
  slug: "tingdian";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"wencheng.md": {
	id: "wencheng.md";
  slug: "wencheng";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"what-do-you-think-of-blog-compared-with-the-popular-platform-of-text-creation-such-as-public-account.md": {
	id: "what-do-you-think-of-blog-compared-with-the-popular-platform-of-text-creation-such-as-public-account.md";
  slug: "what-do-you-think-of-blog-compared-with-the-popular-platform-of-text-creation-such-as-public-account";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"why-do-we-need-database-transactions.md": {
	id: "why-do-we-need-database-transactions.md";
  slug: "why-do-we-need-database-transactions";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"why-laravel.md": {
	id: "why-laravel.md";
  slug: "why-laravel";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"why-no-one-to-inherit-chinese-traditional-industry.md": {
	id: "why-no-one-to-inherit-chinese-traditional-industry.md";
  slug: "why-no-one-to-inherit-chinese-traditional-industry";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"zolplay-interview-failed.md": {
	id: "zolplay-interview-failed.md";
  slug: "zolplay-interview-failed";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"friends": {
"index": {
	id: "index";
  collection: "friends";
  data: InferEntrySchema<"friends">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
