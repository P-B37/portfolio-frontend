import { FooterBrand } from './footer-brand'
import { FooterLinks } from './footer-links'
import { Socials } from '../socials'
import { FooterMeta } from './footer-meta'
import { EmailCTA } from './email-cta'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12 px-4 md:px-8 md:mx-auto">
        
        <div className="grid gap-8 md:grid-cols-3">
            <FooterBrand />
            <FooterLinks />
            <div className="flex flex-col gap-4">
                <FooterMeta />
                <EmailCTA />
                <Socials showModeToggle={false} />
            </div>
        </div>

        <div className="mt-10 mx-auto border-t border-border/40 pt-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p>© {new Date().getFullYear()} Ndeze Emmanuel. All rights reserved.</p>  
        </div>
      </div>
    </footer>
  )
}
