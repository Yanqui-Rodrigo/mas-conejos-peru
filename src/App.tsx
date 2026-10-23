import { useEffect, useState, type FormEvent } from 'react'
import { rabbits, type Rabbit } from './data/rabbits'
import './App.css'

type FilterKey = 'all' | 'lop' | 'upright' | 'fluffy'
type CartLine = { id: string; quantity: number }

const filters: { id: FilterKey; label: string }[] = [
  { id: 'all', label: 'Todas las razas' },
  { id: 'lop', label: 'Orejas caídas' },
  { id: 'upright', label: 'Orejas erguidas' },
  { id: 'fluffy', label: 'Pelaje largo / Teddy' },
]

const welcomeItems = [
  { icon: 'grass', title: 'Heno Timothy Premium', text: 'Heno natural de primer corte, rico en fibra para acompañar su salud dental y digestiva.', note: '1.5 kg sellado al vacío', freshness: true },
  { icon: 'nutrition', title: 'Alimento para gazapo', text: 'Pellets homogéneos formulados para una transición alimentaria gradual y equilibrada.', note: 'Fórmula de crecimiento' },
  { icon: 'menu_book', title: 'Guía digital de cuidados', text: 'Consejos de adaptación, enriquecimiento, lenguaje corporal y cuidados cotidianos.', note: 'Acceso inmediato en PDF' },
  { icon: 'stethoscope', title: 'Primera consulta veterinaria', text: 'Revisión clínica inicial con orientación para encontrar un especialista en exóticos.', note: 'Acompañamiento Mas Conejos' },
]

const footerLinks = {
  breeds: ['Mini Lop Holandés', 'Belier Angora Enano', 'Netherland Dwarf', 'Cabeza de León', 'Rex Enano'],
  care: ['Prevención de estasis gastrointestinal', 'Protocolo de vinculación', 'Hojas y flores no tóxicas', 'Esterilización y bienestar', 'Enriquecimiento en casa'],
}

const featuredImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjskC9Sly80C7o9jOr8o8X9rgeKdqZxkhSQVxy9daAtfhVvMt5VguOKf1Mrq_0X_5s1g8C0gTva78sPcqaH8piaVTASfJ3lOB-CkFWBh9lm2XiktaDUgMPCMw5Q6FCUrs-hrlRxHVREGDrigEBqxdsTULfT0MoN3r9eZqWSSU1AHYNdf5Jxw7wBPj6AX065ylDancfy6-28j-t-mwOYM-0sygOU728J25kOUFnlj4tBi87Q52hpDSN'
const logoImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-K2lflTrGyqpGBDgs9sGOJFcKzK_eQPPOTPqXwh3YPzXIwe8u_3Lf7w_Vnp_ULMYBxYjxc0oqwx_gZTfERXAd9hqycD-4cLJlruYCx4N9c2GXtjcnrOFs3WdFSC67Q1rYweevc1KziFUz2jibjmhMTgl8-PddNEwYrfB58g6Ndzb7GBPUcHnm4QAVUBEwTLyzibSCWbIpmKA_neVO0PMy16HuWoH7bQZIBQPVCyRjIlahablmSNY8w25v0TNZJ_13ag'
const whatsappNumber = '51960967665'

const money = (amount: number) => `S/ ${amount.toFixed(2)}`

function Icon({ name, className = '' }: { name: string; className?: string }) {
  return <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>{name}</span>
}

function readCart(): CartLine[] {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem('mas-conejos-cart') ?? '[]')
    if (!Array.isArray(saved)) return []
    return saved.filter((line): line is CartLine =>
      typeof line === 'object' && line !== null &&
      'id' in line && typeof line.id === 'string' && rabbits.some((rabbit) => rabbit.id === line.id) &&
      'quantity' in line && typeof line.quantity === 'number' && Number.isInteger(line.quantity) && line.quantity > 0,
    )
  } catch {
    return []
  }
}

function Header({ search, setSearch, cartCount, cartOpen, onOpenCart }: {
  search: string
  setSearch: (value: string) => void
  cartCount: number
  cartOpen: boolean
  onOpenCart: () => void
}) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Mas Conejos, inicio">
          <img className="brand-logo" src={logoImage} alt="" />
          <span className="brand-copy">
            <strong>Mas Conejos</strong>
            <small>Compromiso y bienestar</small>
          </span>
        </a>
        <label className="header-search search-field">
          <Icon name="search" />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar razas, heno Timothy..." aria-label="Buscar en el catálogo" />
          {search && <button type="button" className="search-clear" onClick={() => setSearch('')} aria-label="Limpiar búsqueda"><Icon name="close" /></button>}
        </label>
        <button type="button" className="header-cart" onClick={onOpenCart} aria-label={`${cartOpen ? 'Cerrar' : 'Abrir'} carrito, ${cartCount} productos`} aria-expanded={cartOpen}>
          <span className="cart-icon-wrap"><Icon name="shopping_bag" /><span className="cart-count">{cartCount}</span></span>
          <span className="header-cart-label">Carrito</span>
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-layout content-wrap">
        <div className="hero-copy">
          <span className="eyebrow-pill"><Icon name="temp_preferences_eco" /> Crianza responsable y bienestar lagomorfo</span>
          <h1>Especialistas en conejitos felices y saludables</h1>
          <p>Descubre razas criadas con amor, orientación de cuidado y todo lo necesario para enriquecer su vida en un hogar respetuoso.</p>
          <a className="button button-primary hero-cta" href="#catalogo"><Icon name="pets" /> Encuentra a tu compañero <Icon name="arrow_downward" /></a>
          <div className="hero-note"><Icon name="verified" /><span>Bienestar animal, orientación cercana y adopciones responsables.</span></div>
        </div>
        <article className="featured-card">
          <div className="featured-photo">
            <img src={featuredImage} alt="Conejito Holland Lop en un entorno natural" />
            <span className="featured-tag"><Icon name="verified" /> Ejemplar destacado</span>
            <span className="photo-caption">Un nuevo comienzo, a su ritmo</span>
          </div>
          <div className="featured-info">
            <div><span className="label-overline">Nuestra raza favorita</span><h2>Holland Lop Miniatura</h2><p>Destete responsable · 8 a 10 semanas</p></div>
            <span className="featured-mark"><Icon name="spa" /></span>
          </div>
        </article>
      </div>
    </section>
  )
}

function ProductCard({ rabbit, quantity, favorite, onAdd, onFavorite }: {
  rabbit: Rabbit
  quantity: number
  favorite: boolean
  onAdd: () => void
  onFavorite: () => void
}) {
  return (
    <article className="rabbit-card">
      <div className="rabbit-photo">
        <img src={rabbit.image} alt={`${rabbit.name}, conejo de compañía`} loading="lazy" />
        <span className="rabbit-badge">{rabbit.badge}</span>
        <span className="weight-badge">~{rabbit.weight}</span>
      </div>
      <div className="rabbit-info">
        <div className="rabbit-description"><h3>{rabbit.name}</h3><p>{rabbit.description}</p></div>
        <div className="rabbit-actions">
          <div className="rabbit-meta"><span><Icon name={rabbit.traitIcon} /> {rabbit.trait}</span><strong>{money(rabbit.price)}</strong></div>
          <div className="card-buttons">
            <button className={`button button-add ${quantity > 0 ? 'is-added' : ''}`} type="button" onClick={onAdd}>
              <Icon name={quantity > 0 ? 'check' : 'add_shopping_cart'} /> {quantity > 0 ? `En el carrito · ${quantity}` : 'Agregar al carrito'}
            </button>
            <button className={`favorite-button ${favorite ? 'is-favorite' : ''}`} type="button" onClick={onFavorite} aria-label={favorite ? `Quitar ${rabbit.name} de favoritos` : `Agregar ${rabbit.name} a favoritos`} aria-pressed={favorite}>
              <Icon name="favorite" />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

function WelcomeKit() {
  return (
    <section className="welcome-section" id="welcome-kit">
      <div className="content-wrap">
        <div className="section-heading section-heading-centered">
          <span className="section-kicker">Nuestro compromiso</span>
          <h2>Kit de bienvenida incluido</h2>
          <p>Cada conejo inicia su nueva etapa con lo esencial para una transición tranquila, nutritiva y acompañada.</p>
        </div>
        <div className="welcome-grid">
          {welcomeItems.map((item) => (
            <article className="welcome-card" key={item.title}>
              <span className="welcome-icon"><Icon name={item.icon} /></span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.freshness && <div className="freshness"><div className="freshness-label"><span>Frescura de cosecha</span><span>Primer corte</span></div><div className="freshness-track" aria-label="Frescura de cosecha: primer corte"><i /><i /><i /><i /></div></div>}
              <span className="welcome-note">{item.note}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpertAdvice() {
  return (
    <section className="advice-section">
      <div className="content-wrap advice-layout">
        <article className="expert-card">
          <span className="expert-kicker">Consejo de especialistas</span>
          <h2>La regla de oro del tutor primerizo</h2>
          <p className="expert-quote">“El heno debe estar siempre disponible y formar la base de su alimentación. La paciencia y el respeto a sus tiempos de confianza construyen vínculos afectivos incomparables.”</p>
          <div className="expert-profile"><span className="expert-avatar"><Icon name="medical_services" /></span><span><strong>Dra. Valeria Montes</strong><small>Medicina veterinaria y bienestar lagomorfo</small></span></div>
          <span className="expert-decoration"><Icon name="eco" /></span>
        </article>
        <div className="testimonials">
          <div className="testimonial-intro"><span className="section-kicker">Historias de tutores</span><h2>Pequeños compañeros, grandes vínculos</h2></div>
          <article className="testimonial-card">
            <div className="stars" aria-label="5 de 5 estrellas">{Array.from({ length: 5 }, (_, index) => <Icon key={index} name="star" />)}</div>
            <p>“Adoptamos a Mochi con su kit completo. La orientación para preparar un espacio seguro fue impecable. Ahora es un miembro más de la familia.”</p>
            <div className="testimonial-author"><Icon name="account_circle" /><span><strong>Camila y Santiago</strong><small>Tutores de Holland Lop</small></span></div>
          </article>
          <article className="testimonial-card">
            <div className="stars" aria-label="5 de 5 estrellas">{Array.from({ length: 5 }, (_, index) => <Icon key={index} name="star" />)}</div>
            <p>“Nuestro Mini Rex llegó con su revisión de salud y consejos claros para adaptarse a casa. La atención fue cercana desde el primer día.”</p>
            <div className="testimonial-author"><Icon name="account_circle" /><span><strong>Javier Arismendi</strong><small>Tutor de Mini Rex</small></span></div>
          </article>
        </div>
      </div>
    </section>
  )
}

function CtaBanner() {
  const message = encodeURIComponent('Hola, vengo de la página de Mas Conejos y quisiera orientación para elegir un conejito.')
  return (
    <section className="cta-section">
      <div className="content-wrap cta-layout">
        <div><span className="section-kicker">Te acompañamos en la elección</span><h2>¿Tienes dudas sobre qué raza elegir?</h2><p>Conversemos sobre tu espacio, tus rutinas y el compañero lagomorfo que mejor encaje contigo.</p></div>
        <div className="cta-buttons"><a className="button button-primary" href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noreferrer"><Icon name="chat" /> Hablar con un asesor</a><a className="button button-secondary" href="#welcome-kit"><Icon name="menu_book" /> Ver kit de bienvenida</a></div>
      </div>
    </section>
  )
}

function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const submitNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="site-footer">
        <div className="footer-promises"><div className="content-wrap promise-grid">
        <div className="promise-item"><Icon name="verified" /><span><strong>Bienestar primero</strong><small>Orientación para una adopción responsable.</small></span></div>
        <div className="promise-item"><Icon name="local_shipping" /><span><strong>Traslados con cuidado</strong><small>Coordinamos cada entrega con tranquilidad.</small></span></div>
        <div className="promise-item"><Icon name="nest_eco_leaf" /><span><strong>Alimentación botánica</strong><small>Forraje y hábitos pensados para conejos.</small></span></div>
        </div></div>
      <div className="content-wrap footer-main">
        <div className="footer-brand"><a className="brand" href="#top"><img className="brand-logo" src={logoImage} alt="" /><span className="brand-copy"><strong>Mas Conejos</strong><small>Lima · La Molina</small></span></a><p>Un espacio de bienestar, crianza ética y orientación cercana para quienes comparten su vida con conejos.</p><div className="social-icons"><Icon name="pets" /><Icon name="favorite" /><Icon name="eco" /></div></div>
        <nav className="footer-links" aria-label="Directorio de razas"><h3>Directorio de razas</h3><ul>{footerLinks.breeds.map((link) => <li key={link}><a href="#catalogo">{link}</a></li>)}</ul></nav>
        <nav className="footer-links" aria-label="Guías de cuidado"><h3>Guías de cuidado</h3><ul>{footerLinks.care.map((link) => <li key={link}><a href="#welcome-kit">{link}</a></li>)}</ul></nav>
        <div className="newsletter"><h3>Boletín Madriguera</h3><p>Consejos de cuidado, novedades del catálogo y recursos para tutores.</p><form className="newsletter-form" onSubmit={submitNewsletter}><input type="email" placeholder="tu-correo@ejemplo.com" aria-label="Tu correo electrónico" required /><button type="submit" aria-label="Suscribirme"><Icon name={subscribed ? 'check' : 'arrow_forward'} /></button></form>{subscribed && <small className="newsletter-success">Gracias por tu interés. Pronto tendremos novedades.</small>}</div>
      </div>
      <div className="footer-bottom"><div className="content-wrap footer-bottom-inner"><span>© {new Date().getFullYear()} Mas Conejos · Boutique y bienestar lagomorfo.</span><div><a href="#privacidad">Privacidad</a><a href="#adopcion">Términos de adopción</a><a href="#salud">Bienestar animal</a></div></div></div>
    </footer>
  )
}

function Cart({ items, cartCount, cartTotal, open, onClose, onQuantity, onRemove, onClear }: {
  items: { rabbit: Rabbit; quantity: number }[]
  cartCount: number
  cartTotal: number
  open: boolean
  onClose: () => void
  onQuantity: (id: string, change: number) => void
  onRemove: (id: string) => void
  onClear: () => void
}) {
  const orderLines = items.map(({ rabbit, quantity }) => `• ${quantity} x *${rabbit.name}* — ${money(rabbit.price * quantity)}`).join('\n')
  const orderMessage = `Hola, vengo de la página web de Mas Conejos y quiero consultar por estos conejitos:\n\n${orderLines}\n\n*Total: ${money(cartTotal)}*`
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`

  return (
    <>
      {open && <button type="button" className="cart-backdrop" onClick={onClose} aria-label="Cerrar carrito" />}
      <aside className={`cart-sidebar ${open ? 'is-open' : ''}`} aria-label="Carrito de compras">
        <div className="cart-heading"><div><span className="cart-kicker"><Icon name="local_mall" /> Tu selección</span><h2>Tu carrito <span>{cartCount}</span></h2></div><button className="cart-close" type="button" onClick={onClose} aria-label="Cerrar carrito"><Icon name="close" /></button></div>
        <div className="cart-items">
          {items.length === 0 ? <div className="cart-empty"><span className="empty-illustration"><Icon name="cruelty_free" /></span><h3>Tu madriguera está vacía</h3><p>Cuando agregues un conejito, aparecerá aquí con el detalle de tu selección.</p><button type="button" className="text-link" onClick={onClose}>Explorar razas <Icon name="arrow_forward" /></button></div> : <>
            <div className="cart-items-top"><span>{cartCount} {cartCount === 1 ? 'conejito seleccionado' : 'conejitos seleccionados'}</span><button type="button" onClick={onClear}>Vaciar</button></div>
            {items.map(({ rabbit, quantity }) => <article className="cart-line" key={rabbit.id}>
              <img src={rabbit.image} alt="" />
              <div className="cart-line-info"><strong>{rabbit.name}</strong><small>{money(rabbit.price)} · {rabbit.weight}</small><div className="quantity-control"><button type="button" onClick={() => onQuantity(rabbit.id, -1)} aria-label={`Quitar una unidad de ${rabbit.name}`}>−</button><span>{quantity}</span><button type="button" onClick={() => onQuantity(rabbit.id, 1)} aria-label={`Agregar una unidad de ${rabbit.name}`}>+</button></div></div>
              <div className="cart-line-end"><strong>{money(rabbit.price * quantity)}</strong><button type="button" onClick={() => onRemove(rabbit.id)} aria-label={`Quitar ${rabbit.name} del carrito`}>Quitar</button></div>
            </article>)}
          </>}
        </div>
        <div className="cart-footer">
          <div className="cart-total"><span>Total de tu selección</span><strong>{money(cartTotal)}</strong></div>
          <a className={`button button-whatsapp ${items.length === 0 ? 'is-disabled' : ''}`} href={items.length > 0 ? whatsappUrl : undefined} target="_blank" rel="noreferrer" aria-disabled={items.length === 0} onClick={(event) => { if (items.length === 0) event.preventDefault() }}><Icon name="chat" /> Comprar por WhatsApp <Icon name="north_east" /></a>
          <p className="cart-note">El pedido se coordina directamente por WhatsApp. Disponibilidad y entrega sujetas a confirmación.</p>
        </div>
      </aside>
    </>
  )
}

function App() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')
  const [cart, setCart] = useState<CartLine[]>(readCart)
  const [favorites, setFavorites] = useState<string[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    try { localStorage.setItem('mas-conejos-cart', JSON.stringify(cart)) } catch { /* Storage can be unavailable in private browsing. */ }
  }, [cart])

  useEffect(() => {
    if (!cartOpen) return
    const previousOverflow = document.body.style.overflow
    const mobileDrawer = window.matchMedia('(max-width: 1199px)')
    const syncPageScroll = () => {
      document.body.style.overflow = mobileDrawer.matches ? 'hidden' : previousOverflow
    }
    syncPageScroll()
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setCartOpen(false) }
    window.addEventListener('keydown', closeOnEscape)
    mobileDrawer.addEventListener('change', syncPageScroll)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
      mobileDrawer.removeEventListener('change', syncPageScroll)
    }
  }, [cartOpen])

  const addToCart = (id: string) => setCart((current) => {
    const existing = current.find((line) => line.id === id)
    if (existing) return current.map((line) => line.id === id ? { ...line, quantity: Math.min(line.quantity + 1, 99) } : line)
    return [...current, { id, quantity: 1 }]
  })
  const changeQuantity = (id: string, change: number) => setCart((current) => current.map((line) => line.id === id ? { ...line, quantity: Math.max(1, Math.min(99, line.quantity + change)) } : line))
  const removeFromCart = (id: string) => setCart((current) => current.filter((line) => line.id !== id))
  const cartItems = cart.flatMap((line) => {
    const rabbit = rabbits.find((item) => item.id === line.id)
    return rabbit ? [{ rabbit, quantity: line.quantity }] : []
  })
  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0)
  const cartTotal = cartItems.reduce((sum, item) => sum + item.rabbit.price * item.quantity, 0)
  const normalizedSearch = search.trim().toLocaleLowerCase('es')
  const visibleRabbits = rabbits.filter((rabbit) => {
    const matchesFilter = activeFilter === 'all' ||
      (activeFilter === 'lop' && rabbit.ears === 'caidas') ||
      (activeFilter === 'upright' && rabbit.ears === 'erguidas') ||
      (activeFilter === 'fluffy' && (rabbit.coat === 'largo' || rabbit.coat === 'lanoso'))
    const matchesSearch = !normalizedSearch || `${rabbit.name} ${rabbit.temperament} ${rabbit.badge} ${rabbit.description}`.toLocaleLowerCase('es').includes(normalizedSearch)
    return matchesFilter && matchesSearch
  })

  const toggleFavorite = (id: string) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])

  return (
    <>
      <div className={`app-shell ${cartOpen ? 'cart-open' : ''}`}>
      <Header search={search} setSearch={setSearch} cartCount={cartCount} cartOpen={cartOpen} onOpenCart={() => setCartOpen((current) => !current)} />
      <main className="page-main">
        <Hero />
        <section className="catalog-section" id="catalogo">
          <div className="catalog-toolbar">
            <div className="content-wrap toolbar-inner">
              <div className="catalog-heading"><h2>Catálogo de razas</h2></div>
              <div className="filter-list" role="group" aria-label="Filtrar razas">
                {filters.map((filter) => <button type="button" key={filter.id} className={`filter-button ${activeFilter === filter.id ? 'is-active' : ''}`} onClick={() => setActiveFilter(filter.id)} aria-pressed={activeFilter === filter.id}>{filter.label}{filter.id === 'all' && <span>{rabbits.length}</span>}</button>)}
              </div>
            </div>
          </div>
          <div className="content-wrap catalog-content">
            <div className="catalog-caption"><span>Razas de compañía</span><span><Icon name="tune" /> Encuentra el temperamento que va contigo</span></div>
            {visibleRabbits.length > 0 ? <div className="rabbit-grid">{visibleRabbits.map((rabbit) => <ProductCard key={rabbit.id} rabbit={rabbit} quantity={cart.find((line) => line.id === rabbit.id)?.quantity ?? 0} favorite={favorites.includes(rabbit.id)} onAdd={() => { addToCart(rabbit.id); setCartOpen(true) }} onFavorite={() => toggleFavorite(rabbit.id)} />)}</div> : <div className="no-results"><Icon name="search_off" /><h3>No encontramos esa raza</h3><p>Prueba con otro nombre o cambia los filtros del catálogo.</p><button type="button" className="button button-secondary" onClick={() => { setSearch(''); setActiveFilter('all') }}>Ver todas las razas</button></div>}
          </div>
        </section>
        <WelcomeKit />
        <ExpertAdvice />
        <CtaBanner />
      </main>
      <Footer />
      </div>
      <Cart items={cartItems} cartCount={cartCount} cartTotal={cartTotal} open={cartOpen} onClose={() => setCartOpen(false)} onQuantity={changeQuantity} onRemove={removeFromCart} onClear={() => setCart([])} />
    </>
  )
}

export default App
