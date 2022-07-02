<?php header('Content-Type: text/html; charset=utf-8');
    class Valdator{
        private $data;
        private $errors = [];
  
        public function __construct($post_data){
            $this->data = $post_data;
        }
        private function addError($key, $value){
            $this->errors['error'][$key] = $value;
        }
        private function validateName(){
            if(isset($this->data['name'])){
            $val=trim($this->data['name']);
            $val_length=strlen($val);
            if(empty($val)){
                 $this->addError('name', 'Името на учебния предмет е задължително поле');
            }else{
                if($val_length < 2 || $val_length> 150){
                        if($val_length === 1){
                            $this->addError('name', "Името на учебния предмет трябва да е с дължина между 2 и 150 символа, а вие сте въвели {$val_length} символ.");
                        }else{
                            $this->addError('name', "Името на учебния предмет трябва да е с дължина между 2 и 150 символа, а вие сте въвели {$val_length} символи.");
                        }
                }
            }
        }
        }  
        private function validateTeacher(){
            if(isset($this->data['teacher'])){
            $val=trim($this->data['teacher']);
            $val_length=strlen($val);
            if(empty($val)){
                $this->addError('teacher', 'Името на преподавателя е задължително поле');
            }else{
                if($val_length < 3 || $val_length > 200){
                    if($val_length === 1){
                        $this->addError('teacher', "Името на преподавателя трябва да е с дължина между 3 и 200 символа, а вие сте въвели {$val_length} символ");
                    }
                    $this->addError('teacher', "Името на преподавателя трябва да е с дължина между 3 и 200 символа, а вие сте въвели {$val_length} символи");
                }
            }
        }
        }
        private function validateDescription(){
            if(isset($this->data['description'])){
            $val=trim($this->data['description']);
            $val_length=strlen($val);
            if(empty($val)){
                $this->addError('description', 'Описанието е задължително поле');
            }else{
                if($val_length < 10){
                    $this->addError('description', "Oписанието трябва да е с дължина поне 10 символа,  а вие сте въвели {$val_length} символи.");
                }
            }
        }
        }
        private function validateGroup(){
            if(isset($this->data['group'])){
            $val=trim($this->data['group']);
            if(empty($val)){
                $this->addError('group', 'Групата е задължително поле');
            }else{
                if(! in_array($val, array('М', 'ПМ', 'ОКН', 'ЯКН'))){
                    $this->addError('group', 'Невалидна група, изберете една от М, ПМ, ОКН и ЯКН.');
                }
            }
        }
        }
        private function validateCredits(){
            if(isset($this->data['credits'])){
            $val=trim($this->data['credits']);

            if(empty($val)){
                $this->addError('credits', 'Кредитите са задължително поле');
            }else{
                if(! ctype_digit($val)){
                    $this->addError('credits', 'Кредитите трябва да бъдат цяло число.');
                }
                if($val <= 0){
                    $this->addError('credits', 'Кредитите трябва да бъдат положителни числа.');
                }
            }
        }
        }

        public function validateForm(){
            $this->validateName();
            $this->validateTeacher();
            $this->validateDescription();
            $this->validateGroup();
            $this->validateCredits();
            return $this->errors;
        }

    }
?>