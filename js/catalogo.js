// Catálogo de procura y suministros.
// Para agregar un producto, copie una línea y cambie sus datos.
// cat: petrolero | electrico | respaldo | maquinaria | clima | construccion
window.CATALOGO = [
  // Industria petrolera y siderúrgicos
  { id: 'p1', cat: 'petrolero', nombre: 'Tubería para la industria petrolera', detalle: 'Tubería de acero al carbono para líneas de proceso y servicios', unidad: 'tubo' },
  { id: 'p2', cat: 'petrolero', nombre: 'Válvulas', detalle: 'Compuerta, bola y retención', unidad: 'unidad' },
  { id: 'p3', cat: 'petrolero', nombre: 'Bridas y conexiones', detalle: 'Bridas, codos, tees y reducciones', unidad: 'unidad' },
  { id: 'p4', cat: 'petrolero', nombre: 'Empacaduras y espárragos', detalle: 'Para uniones bridadas', unidad: 'juego' },
  { id: 'p5', cat: 'petrolero', nombre: 'Instrumentación', detalle: 'Manómetros, termómetros y transmisores', unidad: 'unidad' },
  { id: 'p6', cat: 'petrolero', nombre: 'Equipos a prueba de explosión', detalle: 'Luminarias, cajas y sellos para áreas clasificadas', unidad: 'unidad' },
  { id: 'p7', cat: 'petrolero', nombre: 'Productos siderúrgicos', detalle: 'Láminas, perfiles, cabillas y tubería estructural', unidad: 'pieza' },
  { id: 'p8', cat: 'petrolero', nombre: 'Soldadura', detalle: 'Electrodos y consumibles de soldadura', unidad: 'caja' },
  { id: 'p9', cat: 'petrolero', nombre: 'Equipos de protección personal', detalle: 'Cascos, botas, guantes, lentes y ropa ignífuga', unidad: 'lote' },

  // Material eléctrico
  { id: 'e1', cat: 'electrico', nombre: 'Conductores eléctricos', detalle: 'Cables de cobre y aluminio para baja y media tensión', unidad: 'rollo' },
  { id: 'e2', cat: 'electrico', nombre: 'Iluminación', detalle: 'Luminarias para galpones, calles, áreas externas e internas', unidad: 'unidad' },
  { id: 'e3', cat: 'electrico', nombre: 'Breakers, controles y tableros', detalle: 'Protección y control para instalaciones eléctricas', unidad: 'unidad' },
  { id: 'e4', cat: 'electrico', nombre: 'Terminales, conectores y botonería', detalle: 'Accesorios para conexiones y mando', unidad: 'lote' },
  { id: 'e5', cat: 'electrico', nombre: 'Transformadores', detalle: 'De distribución, monofásicos y trifásicos', unidad: 'unidad' },
  { id: 'e6', cat: 'electrico', nombre: 'Tendidos eléctricos, postes y herrajes', detalle: 'Material para redes aéreas', unidad: 'lote' },
  { id: 'e7', cat: 'electrico', nombre: 'Tubería metálica EMT e IMT', detalle: 'Con sus accesorios', unidad: 'tubo' },
  { id: 'e8', cat: 'electrico', nombre: 'Tubería y cajas PVC', detalle: 'Tubería, cajas de paso, conectores y accesorios', unidad: 'tubo' },
  { id: 'e9', cat: 'electrico', nombre: 'Motores y variadores de frecuencia', detalle: 'Para equipos e industria', unidad: 'unidad' },

  // Respaldo de energía
  { id: 'r1', cat: 'respaldo', nombre: 'Plantas eléctricas', detalle: 'Plantas de emergencia para residencias, comercios e industrias', unidad: 'unidad' },
  { id: 'r2', cat: 'respaldo', nombre: 'Transferencias automáticas (ATS)', detalle: 'Para conectar la planta al tablero', unidad: 'unidad' },
  { id: 'r3', cat: 'respaldo', nombre: 'Equipos de respaldo eléctrico', detalle: 'Inversores y baterías', unidad: 'unidad' },

  // Maquinaria y equipos industriales
  { id: 'm1', cat: 'maquinaria', nombre: 'Máquinas de soldar', detalle: 'Eléctricas y motosoldadoras', unidad: 'unidad' },
  { id: 'm2', cat: 'maquinaria', nombre: 'Compresores', detalle: 'Para obra e industria', unidad: 'unidad' },
  { id: 'm3', cat: 'maquinaria', nombre: 'Máquinas herramienta', detalle: 'Tornos, guillotinas, calandras, cizallas y taladros de pedestal', unidad: 'unidad' },
  { id: 'm4', cat: 'maquinaria', nombre: 'Maquinaria pesada', detalle: 'Retroexcavadoras, payloaders, tractores, motoniveladoras y compactadoras', unidad: 'unidad' },
  { id: 'm5', cat: 'maquinaria', nombre: 'Equipos de izaje', detalle: 'Grúas, montacargas, jumbos y puentes grúa', unidad: 'unidad' },
  { id: 'm6', cat: 'maquinaria', nombre: 'Repuestos originales', detalle: 'Para maquinaria y equipos', unidad: 'unidad' },

  // Climatización y refrigeración
  { id: 'c1', cat: 'clima', nombre: 'Equipos split y compactos', detalle: 'Para residencias, oficinas, comercios e industrias', unidad: 'unidad' },
  { id: 'c2', cat: 'clima', nombre: 'Extractores e impulsadores eólicos', detalle: 'Ventilación para cocinas, techos y galpones', unidad: 'unidad' },
  { id: 'c3', cat: 'clima', nombre: 'Neveras exhibidoras', detalle: 'Exhibidoras, charcuteras, carniceras y pescaderas', unidad: 'unidad' },
  { id: 'c4', cat: 'clima', nombre: 'Repuestos de refrigeración', detalle: 'Válvulas solenoide y de expansión, filtros y controles', unidad: 'unidad' },

  // Construcción
  { id: 'k1', cat: 'construccion', nombre: 'Láminas para techo', detalle: 'Policarbonato, acerolit y termopanel', unidad: 'lámina' },
  { id: 'k2', cat: 'construccion', nombre: 'Malla Alfajol', detalle: 'Para cerramientos perimetrales', unidad: 'rollo' },
  { id: 'k3', cat: 'construccion', nombre: 'Impermeabilizantes', detalle: 'Mantos y productos para techos', unidad: 'rollo o galón' },
  { id: 'k4', cat: 'construccion', nombre: 'Pinturas', detalle: 'Interior, exterior y anticorrosivos', unidad: 'galón' },
  { id: 'k5', cat: 'construccion', nombre: 'Tubería de hierro y PVC', detalle: 'Para aguas, drenajes y estructuras', unidad: 'tubo' },
];
