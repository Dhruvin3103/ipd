// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/kjXhfW1Ia0a
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"

// export default function Component() {
//   return (
//     <div className="min-h-screen bg-[#05192d] text-white">
//       <nav className="px-8 py-4 flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <FlagIcon className="text-[#33ff00] h-6 w-6" />
//           <span className="text-lg font-bold">datacamp</span>
//         </div>
//         <div className="flex space-x-4">
//           <Link className="hover:text-gray-300" href="#">
//             Catálogo 
//           </Link>
//           <Link className="hover:text-gray-300" href="#">
//             Recursos
//           </Link>
//           <Link className="hover:text-gray-300" href="#">
//             Precios
//           </Link>
//           <Link className="hover:text-gray-300" href="#">
//             Empresa
//           </Link>
//           <Link className="hover:text-gray-300" href="#">
//             Universidades
//           </Link>
//           <SearchIcon className="h-5 w-5" />
//           <span>ES</span>
//           <Button className="text-black bg-white">Inicia Sesión</Button>
//           <Button className="bg-[#33ff00]">Comenzar</Button>
//         </div>
//       </nav>
//       <div className="px-8 py-12 flex justify-between">
//         <div className="max-w-lg">
//           <h1 className="text-6xl font-bold mb-6">Desarrolla habilidades de datos e IA</h1>
//           <p className="mb-6">Libera el poder de los datos y la IA aprendiendo Python, ChatGPT, SQL, Power BI y más.</p>
//           <Button className="bg-[#33ff00] mb-4">Empieza a Aprender Gratis</Button>
//           <Button variant="outline">DataCamp Para Empresas</Button>
//           <div className="flex space-x-4 mt-8">
//             <PiIcon className="h-6 w-6" />
//             <RatIcon />
//             <DatabaseIcon className="h-6 w-6" />
//             <TextIcon className="h-6 w-6" />
//             <TableIcon className="h-6 w-6" />
//             <PowerIcon className="h-6 w-6" />
//             <FileSpreadsheetIcon className="h-6 w-6" />
//             <ServerIcon className="h-6 w-6" />
//             <FolderGitIcon className="h-6 w-6" />
//             <ShellIcon className="h-6 w-6" />
//             <SliceIcon className="h-6 w-6" />
//             <SparkleIcon className="h-6 w-6" />
//           </div>
//         </div>
//         <Card className="w-[350px] bg-white text-black">
//           <CardHeader>
//             <CardTitle>Crea Tu Cuenta Gratuita</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid w-full gap-4">
//               <Button className="flex justify-center" variant="secondary">
//                 Google
//               </Button>
//               <Button className="flex justify-center" variant="secondary">
//                 LinkedIn
//               </Button>
//               <Button className="flex justify-center" variant="secondary">
//                 Facebook
//               </Button>
//               <div className="border-t border-gray-300 my-4" />
//               <div className="flex flex-col space-y-1.5">
//                 <Input placeholder="Correo electrónico" type="email" />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Input placeholder="Contraseña" type="password" />
//               </div>
//               <Button className="bg-[#33ff00]">Empieza a Aprender Gratis</Button>
//               <p className="text-xs text-gray-600 mt-2">
//                 Al continuar, acepta nuestros{" "}
//                 <a className="text-[#33ff00]" href="#">
//                   Términos de uso
//                 </a>
//                 , nuestra{" "}
//                 <a className="text-[#33ff00]" href="#">
//                   Política de privacidad
//                 </a>{" "}
//                 y que sus datos se almacenan en los EE. UU.
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

// function DatabaseIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <ellipse cx="12" cy="5" rx="9" ry="3" />
//       <path d="M3 5V19A9 3 0 0 0 21 19V5" />
//       <path d="M3 12A9 3 0 0 0 21 12" />
//     </svg>
//   )
// }


// function FileSpreadsheetIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
//       <polyline points="14 2 14 8 20 8" />
//       <path d="M8 13h2" />
//       <path d="M8 17h2" />
//       <path d="M14 13h2" />
//       <path d="M14 17h2" />
//     </svg>
//   )
// }


// function FlagIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
//       <line x1="4" x2="4" y1="22" y2="15" />
//     </svg>
//   )
// }


// function FolderGitIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
//       <circle cx="12" cy="13" r="2" />
//       <path d="M14 13h3" />
//       <path d="M7 13h3" />
//     </svg>
//   )
// }


// function PiIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="9" x2="9" y1="4" y2="20" />
//       <path d="M4 7c0-1.7 1.3-3 3-3h13" />
//       <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
//     </svg>
//   )
// }


// function PowerIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
//       <line x1="12" x2="12" y1="2" y2="12" />
//     </svg>
//   )
// }


// function RatIcon(props) { return -1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4" />
//   <path d="M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3" />
//   <path d="M13.2 18a3 3 0 0 0-2.2-5" />
//   <path d="M13 22H4a2 2 0 0 1 0-4h12" />
//   <path d="M16 9h.01" />
// </svg>
// <svg
//  {...props}  xmlns="http://www.w3.org/2000/svg"
//   width="24"
//   height="24"
//   viewBox="0 0 24 24"
//   fill="none"
//   stroke="currentColor"
//   strokeWidth="2"
//   strokeLinecap="round"
//   strokeLinejoin="round"
// >
//   <path d="M17 5c0-1.7 }


// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   )
// }


// function ServerIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
//       <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
//       <line x1="6" x2="6.01" y1="6" y2="6" />
//       <line x1="6" x2="6.01" y1="18" y2="18" />
//     </svg>
//   )
// }


// function ShellIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" />
//     </svg>
//   )
// }


// function SliceIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 14-6 6h9v-3" />
//       <path d="M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z" />
//     </svg>
//   )
// }


// function SparkleIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z" />
//     </svg>
//   )
// }


// function TableIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 3v18" />
//       <rect width="18" height="18" x="3" y="3" rx="2" />
//       <path d="M3 9h18" />
//       <path d="M3 15h18" />
//     </svg>
//   )
// }


// function TextIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M17 6.1H3" />
//       <path d="M21 12.1H3" />
//       <path d="M15.1 18H3" />
//     </svg>
//   )
// }
