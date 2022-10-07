    
    var date= new Date();

    var _ty=date.getFullYear();
    var _tm=date.getMonth()+1;
    var _td=date.getDate();
    document.getElementById('ty').value=_ty;
    document.getElementById('tm').value=_tm;
    document.getElementById('td').value=_td;

function claculate(){
    var _by=document.getElementById('by').value;
    var _bm=document.getElementById('bm').value;
    var _bd=document.getElementById('bd').value;

    var _cy, _cm, _cd;

    if(_td < _bd){
        
        _cd=((_td + 30)-_bd);
        document.getElementById('cd').value=_cd;
        _tm=_tm-1;

        if(_tm < _bm){

            _cm = ((_tm+12)-_bm);
            document.getElementById('cm').value=_cm;

            _cy=((_ty-1)-_by);
            document.getElementById('cy').value=_cy;
        }
        else{
            _cm = (_tm-_bm);
            document.getElementById('cm').value=_cm;

            _cy=(_ty-_by);
            document.getElementById('cy').value=_cy;
        }
    }
    else if(_tm < _bm){

        _cd=_td -_bd;
        document.getElementById('cd').value=_cd;

        _cm = ((_tm+12)-_bm);
        document.getElementById('cm').value=_cm;

        _cy=((_ty-1)-_by);
        document.getElementById('cy').value=_cy;
    }
    else{

        _cd=_td -_bd;
        document.getElementById('cd').value=_cd;

        _cm =_tm-_bm;
        document.getElementById('cm').value=_cm;

        _cy=_ty-_by;
        document.getElementById('cy').value=_cy;
    }
}