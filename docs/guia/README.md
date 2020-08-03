# Cloud Computing

## Introducción

Es un autoservicio, debe poder suministrar prestaciones informáticas según sea necesario sin requerir la interacción humana con un proveedor de servicios.

El servicio debe estar disponible a través de un amplio acceso a la red, utilizando los estándares web. Debería ser simple como una consola web.

Los recursos deben estar agrupados, se agrupan para atender a varios clientes, este modelo se llama multitenencia. Son asignados dinámicamente y reasignados según la demanda. Se realiza así porque se puede ahorrar dinero como proveedor. Te permite agregar o quitar recursos a un cliente.

::: tip
Los cinco conceptos que vamos a revisar son: modelo de servicio, arquitectura, autonomía, escalabilidad y precio por transferencia. Hay muchos otros temas que son importantes pero estos son básicos para tener una base.
:::

## Modelo de servicio

1. Infrastructure-as-a-service(IaaS): el proveedor gestiona la infraestructura principal, es decir, posee un centro de datos. Con la infraestructura física de servidores, redes, máquinas de almacenamiento, capas de virtualización, y son entregadas como un servicio. Y el cliente es responsable de su sistema operativo, middleware, aplicaciones y datos. 

::: tip
El pago es por tiempo asignado de los recursos.
:::

2. Platform-as-a-Service(PaaS): Además de controlar la infraestrucutra, el proveedor controla el sistema operativo, Middleware y operaciones.
El proveedor está gestionando un poco más del servicio, por ejemplo tiene un Java Runtime para el tiempo de ejecución. El cliente puede escribir sus aplicaciones y ejecutarlos sin preocuparse de la máquina virtual. El proveedor se encarga de la escalabilidad, alta disponibilidad. 

::: tip
La diferencia principal, es el pago por reparto, se tiene precio por consumo. Solo se paga por la invocación
:::

3. Software-as-a-Service(SaaS): Datos y aplicaciones.
El proveedor entrega todo como un servicio, un ejemplo sería un ERP, el usuario solo interactúa con la oferta de SaaS.

## Arquitectura

La nube posee una arquitectura diseñada para entregar alta disponibilidad, recuperación tras desastre, tolerancia a fallas, escalabilidad, entre otros.

1. Región, es un área geográfica localizada por uno o más dominios de disponibilidad, es decir un área metropolitana. Se elige una ubicación en base a su función, deseas estar más cerca de los usuarios para darle la latencia más baja y el rendimiento más alto.

::: tip
Además que muchos países tienen restricción de datos, sus datos no pueden salir del país.
:::

2. Dominios de disponibilidad (Availability Domains), son uno o más centro de datos completamente aislados y tolerantes a fallas ubicados dentro de una región. Conectados mediante una red de baja latencia y gran ancho de banda. No comparten una infraestructura física como la energía y refrigeración, por esto es poco probable que afecte la disponibilidad de otro dominio.

3. Dominios de Fallas (Fault Domains), es una agrupación de hardware e infraestructura dentro de un dominio de disponibilidad anti-afinidad, son también llamados centro de datos lógicos. Cada dominio de disponibilidad tiene tres dominios de fallas, actúa como un centro de datos lógicos dentro de los dominios de disponibilidad. 

::: tip
Los recursos ubicados en diferentes dominios de Fallas no comparten únicos puntos de falla de hardware como servidores físicos, RAC físicos, conmutadores, unidades de distribución de energía, estos recursos no se comparten.
:::

## Autonomía

La autonomía juega un papel fundamental en Cloud, debido a que se aprovechan los servicios de autonomía dentro de la plataforma como inteligencia artificial y machine learning para ayudar a las organizaciones a reducir costes, reducir riesgos, acelerar la innovación y obtener información predictiva.

Entre esos servicios tenemos base de datos autónomas.

1. Autoconducción, que es parche, actualización sin requerir ninguna intervención humana o downtime. Incluye soporte a escalado en línea de CPU y almacenamiento.

2. Autoprotección, define que tenemos cifrado de forma predeterminada y funciones como bóveda de datos y datos seguros que ayudan identificar datos confidenciales y enmascararlos.

3. Autoreparación, protegernos de todo tipo de tiempo de inactividad, incluyendo cosas como fallos del sistema, mantenimiento.

::: tip
¿Porque usarlo? La idea es que hay muchas tareas que se automatizan con autonomía como copias de seguridad, parches a BD incluido el mantenimiento en la parada. Y tuning de BD, parche automáticamente, actualización.
:::

## Escalabilidad

Escalabilidad, hay 2 tipos:

1. Horizontal (Out or In), te permite agregar o quitar servidores. La escala horizontal, puede tener un escalado automático y se habilita el despliegue a gran escala de máquinas virtuales a partir de una imagen de oro con configuración automática. 

  Si una VM falla, las demás seguirán trabajando, por lo que se obtiene alta disponibilidad. Es la arquitectura predominante en la nube pública.

2. Vertical (Up or Down), puedes tener una máquina dentro de otra máquina, y así agregar o quitarlas. Por ejemplo si tienes un procesador de 8 núcleos, puedes subir a 16 núcleos y tener una maquina mas potente.

::: tip
En el pasado, cuando queríamos almacenar más datos o aumentar rendimiento, lo común era escalar verticalmente y obtener una máquina más potente. Sin embargo, es más común expandirse horizontalmente o tener más máquinas para hacer la misma tarea en paralelo.
:::

## Precio por transferencia

Transferencia de datos, es uno de los mayores costos de la Cloud. En la mayoría de las nubes no hay ningún costo para los datos que llegan a la Cloud, pero si hay que tener cuidado con el costo de salida.

- Si el tráfico es entre 2 dominios de disponibilidad en la misma región, por lo general es gratuito.
- Cuando el tráfico es entre 2 regiones, existe una carga, porque el tráfico podría ir a través de Internet. Por ende, los datos de ingreso son gratis, pero los de egreso tienen un costo.
- De igual manera si es con Internet, pagas por los datos que salen y los que entras son gratis.

::: tip
Hay algunas excepciones si estás conectado con un Gateway que son puertas de entrada, tienes que ir a los centro de datos en las instalaciones, no pagas por entrada o egreso.
:::

## Cloud en Lationamerica

Actualmente Latinoamérica está siendo uno de los focos de atención de las empresas que proveen servicio de Cloud, actualmente tenemos las siguientes regiones:

Regiones existentes:

- Sao Paulo, Brasil. Google, Oracle, Azure, AWS.

Regiones próximamente:
- Belo Horizonte, Brasil. Oracle.
- Santiago de Chile. Google y Oracle.

Regiones en estudio:
- Santiago de Chile, Chile. Alibaba.
