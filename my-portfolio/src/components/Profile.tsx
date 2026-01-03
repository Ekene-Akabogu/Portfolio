/**
 * @copyright 2025 ekeneakabogu
*/

/**
 * Constants
 */
import { socialLinks } from '@/constants';
import { Button } from './ui/button';

export const Profile = () => {
    return <aside className='max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6
    rounded-lg lg:sticky lg:left-0 lg:top-15 lg:w-96'>
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-x-10">
                <h1 className="text-2xl font-bold">Ekene Akabogu</h1>

                <p className='text-sm'>Frontend Developer and Designer</p>
            </div>

            <img 
                src="/avatar.jpg" 
                alt="Ekene"
                className='lg:w-96 rounded-2xl object-cover'
            />

            <div className='mt-6'>
                <p className='text-sm text-neutral-300'>Specialization:</p>
                <div className="text-lg capitalize">Frontend Developer and UI/UX Designer</div>
            </div>

            <div>
                <p className='text-sm text-neutral-300'>Based in:</p>
                <div className="text-lg capitalize">Based in Lagos, Nigeria</div>
            </div>
            
            <div className='flex gap-3 pt-2 text-neutral-500'>
                {socialLinks.map((social, i) => {
                    const Icon = social.icon;

                    return (
                        <a 
                            key={i} 
                            href={social.link}
                            className='hover:text-primary border-2 border-neutral-500 p-1.5 rounded-full
                            hover:border-primary transition duration-200'
                        >
                            <Icon className='size-4'/>
                        </a>
                    )
                })}
            </div>

            <Button
                className = 'mt-2' 
                size='lg'>
                    <a href='#contact'>Let's Work Together!</a>
            </Button>
        </div>
    </aside>
};