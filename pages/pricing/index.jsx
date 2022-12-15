import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout.jsx';

export default function HomePage() {
    return (
        <MainLayout>
            <h1>Pricing page</h1>

            <h1 className={'title'}>
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/pricing/
                    pricing.jsx</code>
            </p>
        </MainLayout>
    )
}