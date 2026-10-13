// Catálogo de suministros.
// Para agregar un producto, copie una línea y cambie sus datos.
// cat: electrico | industrial | petrolero | construccion
window.CATALOGO = [
  // Eléctrico
  { id: 'e1', cat: 'electrico', nombre: 'Cable THHN/THW', detalle: 'Calibres 14 AWG a 4/0 AWG, cobre, 600 V', unidad: 'rollo de 100 m' },
  { id: 'e2', cat: 'electrico', nombre: 'Transformador de distribución', detalle: 'Monofásico y trifásico, 25 a 500 kVA, tipo poste o pedestal', unidad: 'unidad' },
  { id: 'e3', cat: 'electrico', nombre: 'Tablero eléctrico', detalle: 'Residencial, comercial e industrial, con barras de cobre', unidad: 'unidad' },
  { id: 'e4', cat: 'electrico', nombre: 'Interruptores termomagnéticos', detalle: '1, 2 y 3 polos, de 15 A a 800 A', unidad: 'unidad' },
  { id: 'e5', cat: 'electrico', nombre: 'Planta eléctrica diésel', detalle: '20 a 500 kVA, con transferencia automática', unidad: 'unidad' },
  { id: 'e6', cat: 'electrico', nombre: 'Luminarias LED industriales', detalle: 'Tipo campana de 100 a 200 W y reflectores para exteriores', unidad: 'unidad' },

  // Industrial
  { id: 'i1', cat: 'industrial', nombre: 'Motores eléctricos trifásicos', detalle: '1 a 100 HP, 220/440 V, alta eficiencia', unidad: 'unidad' },
  { id: 'i2', cat: 'industrial', nombre: 'Variadores de frecuencia', detalle: 'Para motores de 1 a 100 HP', unidad: 'unidad' },
  { id: 'i3', cat: 'industrial', nombre: 'Bombas centrífugas', detalle: 'Para agua, procesos y servicios industriales', unidad: 'unidad' },
  { id: 'i4', cat: 'industrial', nombre: 'Rodamientos', detalle: 'De bolas y de rodillos, marcas reconocidas', unidad: 'unidad' },
  { id: 'i5', cat: 'industrial', nombre: 'Compresores de aire', detalle: 'De pistón y de tornillo', unidad: 'unidad' },
  { id: 'i6', cat: 'industrial', nombre: 'Equipos de protección personal', detalle: 'Cascos, botas, guantes, lentes, arneses y ropa ignífuga', unidad: 'lote' },

  // Petrolero
  { id: 'p1', cat: 'petrolero', nombre: 'Tubería de acero al carbono', detalle: 'API 5L y ASTM A106, de 2 a 24 pulgadas', unidad: 'tubo de 6 m' },
  { id: 'p2', cat: 'petrolero', nombre: 'Válvulas de compuerta y de bola', detalle: 'API 6D, clases ANSI 150 a 1500', unidad: 'unidad' },
  { id: 'p3', cat: 'petrolero', nombre: 'Bridas y conexiones', detalle: 'ANSI B16.5, codos, tees y reducciones', unidad: 'unidad' },
  { id: 'p4', cat: 'petrolero', nombre: 'Empacaduras y espárragos', detalle: 'Espirometálicas y de anillo, espárragos B7', unidad: 'juego' },
  { id: 'p5', cat: 'petrolero', nombre: 'Instrumentación', detalle: 'Manómetros, termómetros y transmisores de presión', unidad: 'unidad' },
  { id: 'p6', cat: 'petrolero', nombre: 'Equipos a prueba de explosión', detalle: 'Luminarias, cajas y sellos para áreas clasificadas', unidad: 'unidad' },

  // Construcción
  { id: 'c1', cat: 'construccion', nombre: 'Perfiles estructurales', detalle: 'IPE, HEA, UPN y tubulares', unidad: 'pieza de 12 m' },
  { id: 'c2', cat: 'construccion', nombre: 'Cabillas', detalle: 'Acero de refuerzo de 3/8 a 1 pulgada', unidad: 'tonelada' },
  { id: 'c3', cat: 'construccion', nombre: 'Cemento', detalle: 'Gris tipo I, en sacos de 42,5 kg', unidad: 'saco' },
  { id: 'c4', cat: 'construccion', nombre: 'Láminas para techo', detalle: 'Acerolit, termopanel y galvanizadas', unidad: 'lámina' },
  { id: 'c5', cat: 'construccion', nombre: 'Tubería PVC y HDPE', detalle: 'Para aguas, drenajes y canalizaciones eléctricas', unidad: 'tubo de 6 m' },
  { id: 'c6', cat: 'construccion', nombre: 'Pinturas industriales', detalle: 'Anticorrosivos, epóxicas y de tráfico', unidad: 'galón' },
];
