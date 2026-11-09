import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Header, Footer, Breadcrumbs } from '@/components/corporate'
import { blogPosts } from '@/lib/site-data'
export function generateStaticParams() { return blogPosts.map(post => ({ slug: post.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const post = blogPosts.find(item => item.slug === slug); return post ? { title: `${post.title} | AMINODO`, description: post.excerpt } : {} }
export default async function Article({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const post = blogPosts.find(item => item.slug === slug); if (!post) notFound(); return <><Header /><main><div className="article-hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(20,47,61,.9),rgba(20,47,61,.35)),url(${post.image})` }}><div className="container"><div className="eyebrow light"><span className="eyebrow-line" />{post.category} · {post.date}</div><h1>{post.title}</h1></div></div><div className="container"><Breadcrumbs items={[{ label: 'Actualidad', href: '/blog' }, { label: post.title }]} /><article className="article-body"><Link className="back-link" href="/blog"><ArrowLeft size={16} /> Volver a actualidad</Link>{post.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</article></div></main><Footer /></> }
