import React from 'react'
import Button from '@material-ui/core/Button';

class Card extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <>
                {
                    data.map((item, index) => (
                        <div className="card" key={index}>
                            <div>
                                <h2>Colocation {item.nbr_coloc} pers.</h2>
                            </div>
                            <div><img src={item.src} className={"first"} alt=""/>
                                <big>{item.nom}</big>
                            </div>
                            <div>
                                <h6 className={"FirstProf"}>{item.profession}</h6>
                            </div>
                            <div><img src={item.src} className={"second"} alt=""/>
                                <div>
                                    <big className={"Secondlegend"}>{item.nom}</big>
                                </div>
                                    <font className={"Moyen"} size="+2">Revenu mensuel moyen</font>
                                <div>
                                    <font className={"Candidats"} size="+1">Candidats</font>
                                </div>
                                <div>
                                    <font className={"Garants"} size="+1">Garants</font>
                                </div>
                                <div>
                                    <h6 className={"SecondProf"}>{item.profession}</h6>
                                </div>
                            </div>
                            <div>
                                <b className={"Crevenu"}>{item.revenu_candidats} €</b>
                                <b className={"Grevenu"}>{item.revenu_garants} €</b>
                            </div>
                            <div>
                                <Button variant="contained" onClick={() => {
                                    alert('C\' est toi le/la meilleure')
                                }}>Voir plus</Button>
                            </div>

                            <div>
                                <small className="text-muted">Visite du 9 juin a 14h35</small>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Card;