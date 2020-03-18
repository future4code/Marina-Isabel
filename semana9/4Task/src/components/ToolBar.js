import React from 'react'

const ToolBar = () => {
	return (
		<div>
			<div>
			<button>Marcar Todas como completas</button>
			<p>Filtros: </p>				
			<button>Todas</button>
			<button>Pendentes</button>
			<button>Completas</button>
		</div>

			<div>
			<button>Remover tarefas completas</button>
			</div>
		</div>
				
	)
}

export default ToolBar;