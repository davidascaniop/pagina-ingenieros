// Catálogo de suministros.
// Para agregar un producto, copie una línea y cambie sus datos.
// cat: electrico | clima | tuberia | construccion
window.CATALOGO = [
  // Eléctrico
  { id: 'e1', cat: 'electrico', nombre: 'Transformadores de distribución', detalle: 'Monofásicos y trifásicos, tipo poste o pedestal', unidad: 'unidad' },
  { id: 'e2', cat: 'electrico', nombre: 'Motores eléctricos AC', detalle: 'Monofásicos y trifásicos para equipos e industria', unidad: 'unidad' },
  { id: 'e3', cat: 'electrico', nombre: 'Postes metálicos', detalle: 'Para redes eléctricas e iluminación exterior', unidad: 'unidad' },
  { id: 'e4', cat: 'electrico', nombre: 'Luminarias', detalle: 'Para galpones, almacenes y áreas externas', unidad: 'unidad' },
  { id: 'e5', cat: 'electrico', nombre: 'Material eléctrico', detalle: 'Cables, breakers, tableros y canalizaciones', unidad: 'lote' },

  // Climatización y refrigeración
  { id: 'c1', cat: 'clima', nombre: 'Equipos split', detalle: 'Para residencias, oficinas y comercios', unidad: 'unidad' },
  { id: 'c2', cat: 'clima', nombre: 'Equipos compactos', detalle: 'Unidades compactas para locales y áreas de producción', unidad: 'unidad' },
  { id: 'c3', cat: 'clima', nombre: 'Extractores de aire', detalle: 'Para cocinas, baños, kitchenettes e industrias', unidad: 'unidad' },
  { id: 'c4', cat: 'clima', nombre: 'Impulsadores eólicos', detalle: 'Ventilación natural para techos y galpones', unidad: 'unidad' },
  { id: 'c5', cat: 'clima', nombre: 'Neveras exhibidoras', detalle: 'Exhibidoras, charcuteras, carniceras y pescaderas', unidad: 'unidad' },
  { id: 'c6', cat: 'clima', nombre: 'Repuestos de refrigeración', detalle: 'Válvulas solenoide y de expansión, filtros y controles', unidad: 'unidad' },

  // Tubería
  { id: 't1', cat: 'tuberia', nombre: 'Tubería de hierro', detalle: 'Para instalaciones industriales y estructuras', unidad: 'tubo' },
  { id: 't2', cat: 'tuberia', nombre: 'Tubería de PVC', detalle: 'Para aguas, drenajes y canalizaciones eléctricas', unidad: 'tubo' },

  // Construcción
  { id: 'k1', cat: 'construccion', nombre: 'Perfiles estructurales', detalle: 'IPN, IPE, UPN y tubulares', unidad: 'pieza' },
  { id: 'k2', cat: 'construccion', nombre: 'Láminas para techo', detalle: 'Policarbonato, acerolit y termopanel', unidad: 'lámina' },
  { id: 'k3', cat: 'construccion', nombre: 'Malla Alfajol', detalle: 'Para cerramientos perimetrales', unidad: 'rollo' },
  { id: 'k4', cat: 'construccion', nombre: 'Impermeabilizantes', detalle: 'Mantos y productos para techos', unidad: 'rollo o galón' },
  { id: 'k5', cat: 'construccion', nombre: 'Pinturas', detalle: 'Interior, exterior y anticorrosivos', unidad: 'galón' },
];
