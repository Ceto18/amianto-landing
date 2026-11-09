import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Header, Footer, PageHero, Breadcrumbs } from '@/components/corporate'
import { blogPosts } from '@/lib/site-data'
export const metadata = { title: 'Actualidad | AMINODO', description: 'Ideas y conocimiento para gestionar el amianto.' }
export default function Blog() { return <><Header /><main><PageHero eyebrow="Actualidad AMINODO" title="Ideas para actuar mejor." description="Guías, contexto y aprendizajes para tomar decisiones más seguras." /><div className="container"><Breadcrumbs items={[{label:'Actualidad'}]} /><section className="section"><div className="blog-grid">{blogPosts.map(post=><article className="blog-card" key={post.slug}><Link href={`/blog/${post.slug}`} className="blog-image" style={{backgroundImage:`url(${post.image})`}} aria-label={post.title}/><div className="blog-card-body"><div className="blog-meta">{post.category} <span>{post.date}</span></div><h2>{post.title}</h2><p>{post.excerpt}</p><Link className="text-link" href={`/blog/${post.slug}`}>Leer artículo <ArrowUpRight size={16}/></Link></div></article>)}</div></section></div></main><Footer /></> }
