import { FiltersContainer,Form,Input,Label } from "./filtersStyle"


const Filters = (props) => {
    return(
        <FiltersContainer>
            <h2>Filtros</h2>
            <Form>
                <Label>
                    Valor Mínimo:
                    <Input value={props.minFilter} onChange={props.changeMinFilter}/>
                </Label>
                <Label>
                    Valor Máximo:
                    <Input value={props.maxFilter} onChange={props.changeMaxFilter}/>
                </Label>
                <Label>
                    Busca por nome:
                    <Input value={props.searchFilter} onChange={props.changeSearchFilter}/>
                </Label>
            </Form>
        </FiltersContainer>
    )
}

export default Filters
